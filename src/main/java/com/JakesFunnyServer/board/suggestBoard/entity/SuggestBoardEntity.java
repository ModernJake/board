package com.JakesFunnyServer.board.suggestBoard.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "suggest_board")
public class SuggestBoardEntity {
    @Id
    private Integer id;
    private String title;
    private String content;
}
