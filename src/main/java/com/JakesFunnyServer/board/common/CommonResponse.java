package com.JakesFunnyServer.board.common;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CommonResponse<T> {
    private String resultCode;
    private T data;

    @Builder
    public CommonResponse(String resultCode, T data) {
        this.resultCode = resultCode;
        this.data = data;
    }
}
