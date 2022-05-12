import React from "react";
import { useFormik } from "formik";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TextField from "@mui/material/TextField";
import TabPanel from "@mui/lab/TabPanel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../pages/Login.css";
import logo from "../../src/assets/img/fizy-logo.svg";
const Login = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
    },
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <>
      <div className="cs-login-bg">
        <img className="logo" src={logo} />
        <div className="cs-main">
          <span className="check-span">
            <i className="fa-solid fa-check cs-check"></i>
            <h2>
              <b>Hızlı</b>Giriş
            </h2>
          </span>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                      width: "100%",
                    }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab
                        label={
                          <span className="tabs-span">
                            <i className="fa-solid fa-phone"></i>
                            <p>Cep Telefonu</p>
                          </span>
                        }
                        value="1"
                      />
                      <Tab
                        label={
                          <span className="tabs-span">
                            <i className="fa-solid fa-at"></i>
                            <p>E-posta Adresi</p>
                          </span>
                        }
                        value="2"
                      />
                    </TabList>
                  </Box>
                  <TabPanel sx={{ padding: "20px 0px" }} value="1">
                    <TextField
                      required
                      sx={{ width: "100%" }}
                      type="tel"
                      label="Cep Telefon Numarası"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                  </TabPanel>
                  <TabPanel sx={{ padding: "20px 0px" }} value="2">
                    <TextField
                      required
                      sx={{ width: "100%" }}
                      label="E-posta"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </TabPanel>
                </TabContext>
              </Box>
              <div className="cs-checkboxdiv">
                <FormControlLabel
                  control={<Checkbox required />}
                  label="HızlıGiriş Şifresi ile Gir"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Beni Hatırla"
                />
                <button className="cs-loginbutton" type="submit">
                  Giriş Yap
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="cs-button2div">
          <Link to="/register">
            <button className="cs-loginbutton2">Yeni Hesap Oluştur</button>
          </Link>
          <p>
            <i className="fa-solid fa-check cs-check2"></i> HızlıGiriş
            Bilgilerini Güncelle
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
