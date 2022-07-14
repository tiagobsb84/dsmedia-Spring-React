package com.tiago.dsmeta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tiago.dsmeta.entities.Sale;
import com.tiago.dsmeta.repository.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository saleReposisotry;
	
	public List<Sale> listaSales(){
		return saleReposisotry.findAll();
	}
}
