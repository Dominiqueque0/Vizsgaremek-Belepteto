package hu.belepteto.dto.visit;

import java.util.Date;

public class UpdateOneVisit {
    private Date exitTime;

    public UpdateOneVisit() {
    }

    public UpdateOneVisit(Date exitTime) {
        this.exitTime = exitTime;
    }

    public Date getExitTime() {
        return exitTime;
    }

    public void setExitTime(Date exitTime) {
        this.exitTime = exitTime;
    }
}
