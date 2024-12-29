package com.JakesFunnyServer.board.suggestBoard.controller;

import com.JakesFunnyServer.board.common.CommonResponse;
import com.JakesFunnyServer.board.suggestBoard.entity.SuggestBoardEntity;
import com.JakesFunnyServer.board.suggestBoard.service.SuggestBoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/board/suggest-board")
public class SuggestBoardRestController {
    private final SuggestBoardService suggestBoardService;

    @GetMapping("/list")
    public ResponseEntity getSuggestBoardList(String searchWord) {
        CommonResponse<Object> commonResponse = CommonResponse.builder()
                .data(suggestBoardService.getSuggestBoardList(searchWord))
                .resultCode("READ_OK")
                .build();
        return ResponseEntity.ok().body(commonResponse);
    }

    @PostMapping("/insert")
    public ResponseEntity insertSuggestBoard(@RequestBody SuggestBoardEntity entity) {
        suggestBoardService.insertSuggestBoard(entity);

        CommonResponse<Object> commonResponse = CommonResponse.builder()
                .resultCode("CREATE_OK")
                .build();
        return ResponseEntity.ok().body(commonResponse);
    }

    @PostMapping("/update")
    public ResponseEntity updateSuggestBoard(@RequestBody SuggestBoardEntity entity) {
        suggestBoardService.updateSuggestBoard(entity);

        CommonResponse<Object> commonResponse = CommonResponse.builder()
                .resultCode("UPDATE_OK")
                .build();
        return ResponseEntity.ok().body(commonResponse);
    }

    @PostMapping("/delete")
    public ResponseEntity deleteSuggestBoard(@RequestBody SuggestBoardEntity entity) {
        suggestBoardService.deleteSuggestBoard(entity);

        CommonResponse<Object> commonResponse = CommonResponse.builder()
                .resultCode("DELETE_OK")
                .build();
        return ResponseEntity.ok().body(commonResponse);
    }
}
