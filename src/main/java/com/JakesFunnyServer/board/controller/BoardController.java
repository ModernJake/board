package com.JakesFunnyServer.board.controller;

import com.JakesFunnyServer.board.entity.announceboard;
import com.JakesFunnyServer.board.service.announceBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;



@Controller
public class BoardController {

    @Autowired
    private announceBoardService announceBoardService;

    @GetMapping("/board/write") //localhost:8080/board/write
    public String boardWriteForm(){
        return "boardwrite";
    }

    @PostMapping("/board/writepro")
    public String boardWritePro(@ModelAttribute announceboard announceBoard) {
        announceBoardService.write(announceBoard);
        return "";
    }

    @GetMapping("/board/list")
    public String boardList(Model model) {
        model.addAttribute("list", announceBoardService.announceboardList()); // list라는 이름으로 넘길거임
        return "boardList";
    }

    @GetMapping("/board/view") //localhost:8080/board/view?id=1
    public String boardView(Model model, @RequestParam("id") Integer id){

        model.addAttribute("board", announceBoardService.boardView(id));
        return "boardView";
    }

    @GetMapping("/board/delete")
    public String boardDelete(@RequestParam("id") Integer id) {
        announceBoardService.boardDelete(id);
        return "redirect:/board/list";
    }

}
