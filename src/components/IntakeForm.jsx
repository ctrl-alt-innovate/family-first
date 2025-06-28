import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  useTheme,
} from "@mui/material";
import emailjs from "emailjs-com";

const initialFormData = {
  membersName: "",
  dob: "",
  age: "",
  gender: "",
  race: "",
  guardian: "",
  phoneNumber: "",
  emailAddress: "",
  passe: "",
  passeNumber: "",
  medicaidNumber: "",
  careCoordinator: "",
  coordinatorPhone: "",
  coordinatorEmail: "",
  ssn: "",
  ssBenefits: "",
  representativePayee: "",
  adoptionSubsidy: "",
  waiver: null,
  personalCare: null,
  medicationList: "",
  diagnoses: "",
  diagnosesAllergies: "",
  specialDiet: "",
  primaryCarePhysician: "",
  dentist: "",
  vision: "",
  school: "",
  grade: "",
  iq: "",
  ep504Plan: "",
  courtInvolvement: "",
  adaptiveEquipment: "",
  hobbies: "",
  foodLikes: "",
  foodDislikes: "",
  pottyTrained: "",
  nightWetter: "",
  verbal: "",
  behaviors: "",
  personalCareNeeds: "",
};

const IntakeForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = (group, value) => {
    setFormData((prev) => ({
      ...prev,
      [group]: prev[group] === value ? null : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      waiver: formData.waiver || "None",
      personalCare: formData.personalCare || "None",
    };

    emailjs
      .send(
        "service_a9y56ne",
        "family_first_intake",
        templateParams,
        "8r2NsSwK23A2OvLCd"
      )
      .then(
        (response) => {
          alert("Form submitted successfully!");
          setFormData(initialFormData);
        },
        (error) => {
          alert("Failed to submit form. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.light,
        py: 6,
        px: { xs: 4, md: 8 },
        maxWidth: 850,
        borderRadius: 4,
        display: "flex",
        alignContent: "flex-start",
        flexDirection: "column",
        width: { md: "80%", xs: "100%" },
      }}
    >
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Intake Form: Joining the Family First Care Family
      </Typography>
      <Typography align="center" gutterBottom variant="subtitle1" sx={{ mb: 4 }}>
        Thank you for your interest in Family First Care. To help us better
        understand your needs and determine if our services are a good fit,
        please complete the following intake form.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2} justifyContent={"center"}>
          {/* Basic Info */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Member's Name"
              name="membersName"
              value={formData.membersName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
     
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              type="number"
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Race"
              name="race"
              value={formData.race}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Guardian(s)"
              name="guardian"
              value={formData.guardian}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              type="tel"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Email Address"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              type="email"
            />
          </Grid>

          {/* Medicaid Info */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Passe"
              name="passe"
              value={formData.passe}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Passe #"
              name="passeNumber"
              value={formData.passeNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Medicaid #"
              name="medicaidNumber"
              value={formData.medicaidNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Care Coordinator"
              name="careCoordinator"
              value={formData.careCoordinator}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Phone"
              name="coordinatorPhone"
              value={formData.coordinatorPhone}
              onChange={handleChange}
              type="tel"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Email"
              name="coordinatorEmail"
              value={formData.coordinatorEmail}
              onChange={handleChange}
              type="email"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="SSN"
              name="ssn"
              value={formData.ssn}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="SS Benefits"
              name="ssBenefits"
              value={formData.ssBenefits}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Representative Payee"
              name="representativePayee"
              value={formData.representativePayee}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Adoption Subsidy"
              name="adoptionSubsidy"
              value={formData.adoptionSubsidy}
              onChange={handleChange}
            />
          </Grid>

          {/* Checkboxes */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column", width: "90%", pl: 2 }}
          >
            <Typography mb={1}>Waiver</Typography>
            <FormControlLabel
              sx={{ width: "100%" }}
              control={
                <Checkbox
                  checked={formData.waiver === "yes"}
                  onChange={() => handleToggle("waiver", "yes")}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              sx={{ width: "100%" }}
              control={
                <Checkbox
                  checked={formData.waiver === "no"}
                  onChange={() => handleToggle("waiver", "no")}
                />
              }
              label="No"
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column", width: "90%", pl: 2 }}
          >
            <Typography mb={1}>Personal Careservice</Typography>
            <FormControlLabel
              sx={{ width: "100%" }}
              control={
                <Checkbox
                  checked={formData.personalCare === "yes"}
                  onChange={() => handleToggle("personalCare", "yes")}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              sx={{ width: "100%" }}
              control={
                <Checkbox
                  checked={formData.personalCare === "no"}
                  onChange={() => handleToggle("personalCare", "no")}
                />
              }
              label="No"
            />
          </Grid>

          {/* Medical multiline fields */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Medication List"
              name="medicationList"
              value={formData.medicationList}
              onChange={handleChange}

            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Diagnoses"
              name="diagnoses"
              value={formData.diagnoses}
              onChange={handleChange}

            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Diagnoses/Allergies Medication/Food/Animals"
              name="diagnosesAllergies"
              value={formData.diagnosesAllergies}
              onChange={handleChange}

            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Special Diet"
              name="specialDiet"
              value={formData.specialDiet}
              onChange={handleChange}

            />
          </Grid>

          {/* More single-line fields */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Primary Care Physician"
              name="primaryCarePhysician"
              value={formData.primaryCarePhysician}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Dentist"
              name="dentist"
              value={formData.dentist}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Vision"
              name="vision"
              value={formData.vision}
              onChange={handleChange}
            />
          </Grid>

          {/* Education */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="School"
              name="school"
              value={formData.school}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="IQ"
              name="iq"
              value={formData.iq}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="EP/504 Plan"
              name="ep504Plan"
              value={formData.ep504Plan}
              onChange={handleChange}
            />
          </Grid>

          {/* Legal/Adaptive */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Court Involvement"
              name="courtInvolvement"
              value={formData.courtInvolvement}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Adaptive Equipment"
              name="adaptiveEquipment"
              value={formData.adaptiveEquipment}
              onChange={handleChange}
            />
          </Grid>

          {/* Preferences */}
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Hobbies"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}

            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Food Likes"
              name="foodLikes"
              value={formData.foodLikes}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Food Dislikes"
              name="foodDislikes"
              value={formData.foodDislikes}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Potty Trained"
              name="pottyTrained"
              value={formData.pottyTrained}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Night Wetter"
              name="nightWetter"
              value={formData.nightWetter}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Verbal"
              name="verbal"
              value={formData.verbal}
              onChange={handleChange}
            />
          </Grid>

          {/* Additional Info */}
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Behaviors"
              name="behaviors"
              value={formData.behaviors}
              onChange={handleChange}

            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Personal Care Needs"
              name="personalCareNeeds"
              value={formData.personalCareNeeds}
              onChange={handleChange}

            />
          </Grid>

          {/* Submit */}
          <Grid item xs={12} textAlign="center">
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ px: 4, py: 1, borderRadius: "999px" }}
            >
              Submit Form
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default IntakeForm;
