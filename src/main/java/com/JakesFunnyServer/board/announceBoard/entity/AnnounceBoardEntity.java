package com.JakesFunnyServer.board.announceBoard.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity //테이블을 의미
@Data
@Table(name = "announceboard")
public class AnnounceBoardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;

    private String content;

    private String filename;

    private String filepath;
}