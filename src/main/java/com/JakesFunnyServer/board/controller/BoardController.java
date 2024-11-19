package com.JakesFunnyServer.board.controller;

import com.JakesFunnyServer.board.entity.announceboard;
import com.JakesFunnyServer.board.service.announceBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@Controller
public class BoardController {

    @Autowired
    private announceBoardService announceBoardService;

    @GetMapping("/board/write") //localhost:8080/board/write
    public String boardWriteForm(){
        return "boardwrite";
    }

    @PostMapping("/board/writepro")
    public String boardWritePro(@ModelAttribute announceboard announceBoard, Model model,
                                @RequestParam(name = "file") MultipartFile file) throws Exception {

        announceBoardService.write(announceBoard, file);

        model.addAttribute("message", "글 작성이 완료되었습니다.");
        model.addAttribute("searchUrl", "/board/list");

        return "message";
    }

    @GetMapping("/board/list")
    public String boardList(Model model, @PageableDefault(page = 0, size = 10, sort = "id", direction = Sort.Direction.DESC)Pageable pageable,
                            @RequestParam(value = "searchKeyword", required = false) String searchKeyword) {
        Page<announceboard> list = null;

        if(searchKeyword == null){
            list = announceBoardService.announceboardList(pageable);
        }
        else {
            list = announceBoardService.boardSearchList(searchKeyword, pageable);
        }

        int nowPage = list.getPageable().getPageNumber() + 1;
        int startPage = Math.max(nowPage - 4,1);
        int endPage = Math.min(nowPage + 5, list.getTotalPages());

        model.addAttribute("list", list);// list라는 이름으로 넘길거임
        model.addAttribute("nowPage", nowPage);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);
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
    @GetMapping("/board/modify/{id}")
    public String boardModify(@PathVariable("id") Integer id,
                              Model model){

        model.addAttribute("board", announceBoardService.boardView(id));

        return "boardModify";
    }
    @PostMapping("/board/update/{id}")
    public String boardUpdate(@PathVariable("id") Integer id, @ModelAttribute announceboard announceBoard,
                              @RequestParam(name = "file") MultipartFile file) throws Exception{

        announceboard boardTemp = announceBoardService.boardView(id);
        boardTemp.setTitle(announceBoard.getTitle());
        boardTemp.setContent(announceBoard.getContent());

        announceBoardService.write(boardTemp, file);

        return "redirect:/board/list";
    }
}
