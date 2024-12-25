package com.JakesFunnyServer.board.suggestBoard.repository;

import com.JakesFunnyServer.board.suggestBoard.entity.SuggestBoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuggestBoardRepository extends JpaRepository<SuggestBoardEntity, Integer> {
}
