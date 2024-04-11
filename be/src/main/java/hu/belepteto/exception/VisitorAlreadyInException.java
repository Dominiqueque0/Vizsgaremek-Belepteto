package hu.belepteto.exception;

public class VisitorAlreadyInException extends RuntimeException{
    public VisitorAlreadyInException(String message) {
        super(message);
    }
}
