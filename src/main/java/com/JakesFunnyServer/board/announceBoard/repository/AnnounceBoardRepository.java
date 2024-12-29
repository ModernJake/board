package com.JakesFunnyServer.board.announceBoard.repository;

import com.JakesFunnyServer.board.announceBoard.entity.AnnounceBoardEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnounceBoardRepository extends JpaRepository<AnnounceBoardEntity, Integer> { //extends = 상속

    Page<AnnounceBoardEntity> findByTitleContaining(String searchKeyword, Pageable pageable);
}
