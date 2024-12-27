package com.JakesFunnyServer.board.suggestBoard.service;

import com.JakesFunnyServer.board.suggestBoard.entity.SuggestBoardEntity;
import com.JakesFunnyServer.board.suggestBoard.repository.SuggestBoardRepository;
import java.util.Collections;
import java.util.Objects;
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
    public List<SuggestBoardEntity> getSuggestBoardList(String searchWord) {
        if(searchWord != null && searchWord != "") return suggestBoardRepository.findSuggestBoardEntitiesLikeTitle(searchWord);
        return suggestBoardRepository.findAll();
    }

    @Override
    public void insertSuggestBoard(SuggestBoardEntity entity) {
        suggestBoardRepository.saveAndFlush(entity);
    }

    @Override
    public void updateSuggestBoard(SuggestBoardEntity entity) {
        suggestBoardRepository.updateSuggestBoardEntityById(entity.getId(), entity.getTitle(), entity.getContent());
    }

    @Override
    public void deleteSuggestBoard(SuggestBoardEntity entity) {
        suggestBoardRepository.delete(entity);
    }
}
