package hu.belepteto.repository;

import hu.belepteto.model.SavedDay;
import hu.belepteto.model.Visit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface SavedDayRepository extends JpaRepository<SavedDay, Integer>{
    @Query(value = "SELECT * FROM saved_day WHERE DATE(savedate) = DATE(?1)", nativeQuery = true)
    List<SavedDay> findByEntryTime(Date date);

    List<SavedDay> findByVisitIn(List<Visit> visitsToDelete);

    @Query("SELECT s FROM SavedDay s JOIN FETCH s.visitor WHERE s.date = :date")
    List<SavedDay> findByDateWithVisitor(@Param("date") Date date);
}
