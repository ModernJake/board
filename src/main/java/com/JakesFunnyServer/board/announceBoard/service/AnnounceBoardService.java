package com.JakesFunnyServer.board.announceBoard.service;

import com.JakesFunnyServer.board.announceBoard.entity.AnnounceBoardEntity;
import com.JakesFunnyServer.board.announceBoard.repository.AnnounceBoardRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;

import java.util.UUID;

@Slf4j
@Service
public class AnnounceBoardService {

    @Autowired
    private AnnounceBoardRepository announceBoardRepository;

    public void write(AnnounceBoardEntity board) {
        announceBoardRepository.save(board);
    }

    //글 작성
    public void write(AnnounceBoardEntity board, MultipartFile file) throws Exception{

        log.debug("{}", file);

        String projectPath = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\files";

        UUID uuid = UUID.randomUUID();

        String fileName = uuid + "_" + file.getOriginalFilename();

        File saveFile = new File(projectPath, fileName);

        file.transferTo(saveFile);

        board.setFilename(fileName);
        board.setFilepath("/files/" + fileName);

        announceBoardRepository.save(board);
    }
    // 게시글 리스트 처리
    public Page<AnnounceBoardEntity> announceboardList(Pageable pageable){
        return announceBoardRepository.findAll(pageable);
    }

    //페이징 검색 처리
    public Page<AnnounceBoardEntity> boardSearchList(String searchKeyword, Pageable pageable) {

        return announceBoardRepository.findByTitleContaining(searchKeyword, pageable);
    }

    //특정 게시글 불러오기
    public AnnounceBoardEntity boardView(Integer id){

        return announceBoardRepository.findById(id).get();
    }

    //특정 게시글 삭제하기
    public void boardDelete(Integer id) {

        announceBoardRepository.deleteById(id);
    }
}
