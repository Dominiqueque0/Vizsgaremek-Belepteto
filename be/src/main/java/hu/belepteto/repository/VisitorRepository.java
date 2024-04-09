package hu.belepteto.repository;

import hu.belepteto.model.Visit;
import hu.belepteto.model.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitorRepository extends JpaRepository<Visitor, Integer> {
}
