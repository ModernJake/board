package com.JakesFunnyServer.board.service;

import com.JakesFunnyServer.board.entity.announceboard;
import com.JakesFunnyServer.board.repository.announceBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;

import java.util.UUID;

@Service
public class announceBoardService {

    @Autowired
    private announceBoardRepository announceBoardRepository;

    //글 작성
    public void write(announceboard board, MultipartFile file) throws Exception{

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
    public Page<announceboard> announceboardList(Pageable pageable){
        return announceBoardRepository.findAll(pageable);
    }

    //페이징 검색 처리
    public Page<announceboard> boardSearchList(String searchKeyword, Pageable pageable) {

        return announceBoardRepository.findByTitleContaining(searchKeyword, pageable);
    }

    //특정 게시글 불러오기
    public announceboard boardView(Integer id){

        return announceBoardRepository.findById(id).get();
    }

    //특정 게시글 삭제하기
    public void boardDelete(Integer id) {

        announceBoardRepository.deleteById(id);
    }
}
