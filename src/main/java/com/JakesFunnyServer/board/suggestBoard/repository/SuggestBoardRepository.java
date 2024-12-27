package com.JakesFunnyServer.board.suggestBoard.repository;

import com.JakesFunnyServer.board.suggestBoard.entity.SuggestBoardEntity;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SuggestBoardRepository extends JpaRepository<SuggestBoardEntity, Integer> {
    List<SuggestBoardEntity> findSuggestBoardEntitiesById (Integer id);

    @Query("SELECT s FROM SuggestBoardEntity s WHERE s.title LIKE CONCAT('%',:title,'%')")
    List<SuggestBoardEntity> findSuggestBoardEntitiesLikeTitle (@Param("title")String searchWord);

    @Modifying
    @Transactional
    @Query("UPDATE SuggestBoardEntity s SET s.title = :title, s.content = :content WHERE s.id = :id")
    void updateSuggestBoardEntityById(@Param("id") Integer id, @Param("title") String title, @Param("content") String content);
}