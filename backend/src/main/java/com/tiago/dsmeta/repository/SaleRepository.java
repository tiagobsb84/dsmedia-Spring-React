package com.tiago.dsmeta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tiago.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
