package com.app.service;

import java.util.ArrayList;
import java.util.Optional;

import com.app.Entity.QuestionsChoices;

public interface IChoicesService {

	public QuestionsChoices insertChoice(QuestionsChoices transientChoice);
	
	public ArrayList<QuestionsChoices> fetchChoices(Long questionId);
	
	public Optional<QuestionsChoices> fetchChoice(Long choiceId);
}
