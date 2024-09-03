package com.jeison.to_do.utils.messages;

public class ErrorMessage {

    public static String idNotFound(String entity) {
        final String message = "There are no registers in %s with that id";
        return String.format(message, entity);
    }
}
