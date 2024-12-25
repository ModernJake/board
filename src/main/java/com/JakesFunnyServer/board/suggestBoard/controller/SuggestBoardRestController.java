package com.JakesFunnyServer.board.suggestBoard.controller;

import com.JakesFunnyServer.board.common.CommonResponse;
import com.JakesFunnyServer.board.suggestBoard.service.SuggestBoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/board/suggest-board")
public class SuggestBoardRestController {
    private final SuggestBoardService suggestBoardService;

    @GetMapping("/list")
    public ResponseEntity getSuggestBoardList() {

        CommonResponse<Object> commonResponse = CommonResponse.builder()
                .data(suggestBoardService.getSuggestBoardList())
                .resultCode("OK")
                .build();
        log.debug(commonResponse.toString());
        return ResponseEntity.ok().body(commonResponse);
    }
}
