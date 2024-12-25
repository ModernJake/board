package com.JakesFunnyServer.board.suggestBoard.service;

import com.JakesFunnyServer.board.suggestBoard.entity.SuggestBoardEntity;
import com.JakesFunnyServer.board.suggestBoard.repository.SuggestBoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class SuggestBoardServiceImple implements SuggestBoardService {
    private final SuggestBoardRepository suggestBoardRepository;

    @Override
    public List<SuggestBoardEntity> getSuggestBoardList() {
        log.debug(suggestBoardRepository.findAll().toString());
        return suggestBoardRepository.findAll();
    }
}
