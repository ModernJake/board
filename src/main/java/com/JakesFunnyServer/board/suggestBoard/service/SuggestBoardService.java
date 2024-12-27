package com.JakesFunnyServer.board.suggestBoard.service;

import com.JakesFunnyServer.board.suggestBoard.entity.SuggestBoardEntity;

import java.util.List;

public interface SuggestBoardService {
    List<SuggestBoardEntity> getSuggestBoardList(String searchWord);
    void insertSuggestBoard(SuggestBoardEntity suggestBoard);
    void updateSuggestBoard(SuggestBoardEntity suggestBoard);
    void deleteSuggestBoard(SuggestBoardEntity suggestBoard);
}
