package com.JakesFunnyServer.board.service;

import com.JakesFunnyServer.board.entity.announceboard;
import com.JakesFunnyServer.board.repository.announceBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
public class announceBoardService {

    @Autowired
    private announceBoardRepository announceBoardRepository;

    //글 작성
    public void write(announceboard board){
        announceBoardRepository.save(board);
    }
    // 게시글 리스트 처리
    public List<announceboard> announceboardList(){
        return announceBoardRepository.findAll();
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
