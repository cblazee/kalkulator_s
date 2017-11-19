package com.calculator.controller;

import com.calculator.model.NationalFee;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;

@RestController
public class AutocompleteController {

    @RequestMapping("/getAutocomplete")
    public List<NationalFee> getAutocomplete() {
        return new ArrayList<NationalFee>(EnumSet.allOf(NationalFee.class));
    }
}
