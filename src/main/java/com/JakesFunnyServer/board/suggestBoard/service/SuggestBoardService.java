package com.JakesFunnyServer.board.suggestBoard.service;

import com.JakesFunnyServer.board.suggestBoard.entity.SuggestBoardEntity;

import java.util.List;

public interface SuggestBoardService {
    List<SuggestBoardEntity> getSuggestBoardList(SuggestBoardEntity entity);
}
