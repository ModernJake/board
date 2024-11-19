package com.JakesFunnyServer.board.repository;

import com.JakesFunnyServer.board.entity.announceboard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface announceBoardRepository extends JpaRepository<announceboard, Integer> { //extends = 상속

    Page<announceboard> findByTitleContaining(String searchKeyword, Pageable pageable);
}
