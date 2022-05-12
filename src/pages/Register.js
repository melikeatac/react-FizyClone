import React from "react";
import {Link} from "react-router-dom"
import "../pages/Register.css";
import "react-phone-number-input/style.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../src/assets/img/fizy-logo.svg";
import { TextField } from "@mui/material";

const Register = () => {
  const [age, setAge] = React.useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="cs-login-bg">
        <Link to="/login">
          <div className="cs-arrowleft">
            <i class="fa-solid fa-arrow-left-long"></i>
          </div>
        </Link>
        <img className="logo" src={logo} />
        <div className="cs-main">
          <span className="check-span">
            <i className="fa-solid fa-check cs-check"></i>
            <h2>
              <b>Hızlı</b>Giriş
            </h2>
          </span>
          <h3 style={{ margin: "25px 0px 20px 0px" }}>
            Devam edebilmek için kayıt olmanız gerekmektedir.
          </h3>
          <div>
            <form>
              <TextField
                required
                sx={{ width: "100%", margin: "30px 0px 25px 0px" }}
                type="tel"
                label="Cep Telefon Numarası"
                name="phone"
              />
              <TextField
                required
                sx={{ width: "100%", margin: "0px 0px 25px 0px" }}
                label="E-posta"
                name="email"
              />
              <TextField
                required
                sx={{ width: "100%", margin: "0px 0px 25px 0px" }}
                type="password"
                label="Hızlı Giriş Şifresi"
              ></TextField>
              <span>
                Şifreniz en az 6 karakterden oluşmalıdır. Ardışık ve tekrarlı
                olmayan en az bir rakam, bir büyük harf ve bir küçük harf
                içermelidir.
              </span>

              <TextField
                required
                sx={{ width: "100%", margin: "25px 0px" }}
                type="password"
                label="Hızlı Giriş Şifresi Tekrar"
              ></TextField>
              <span>
                Şifrenizi unutmanız durumunda yeni şifre belirlemek için
                güvenlik sorusu gerekmektedir.
              </span>
              <InputLabel
                sx={{ margin: "25px 0px 0px 0px" }}
                id="demo-simple-select-label"
              >
                Güvenlik Sorusu
              </InputLabel>
              <Select
                sx={{ width: "100%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange1}
              >
                <MenuItem value={1}>İlk evcil hayvanınızın adı nedir?</MenuItem>
                <MenuItem value={2}>
                  Sinemada seyrettiğiniz ilk film nedir?
                </MenuItem>
                <MenuItem value={3}>
                  İlkokulda en sevdiğiniz öğretmenininizin adı nedir?{" "}
                </MenuItem>
                <MenuItem value={4}>En sevdiğiniz kitabın adı nedir? </MenuItem>
              </Select>
              <TextField
                required
                sx={{ width: "100%", margin: "25px 0px 25px 0px" }}
                type="text"
                label="Güvenlik Sorusunun Cevabı"
              ></TextField>
              <div className="cs-checkboxdiv">
                <FormControlLabel
                  control={<Checkbox required />}
                  label={
                    <span>
                      <b>Katılım koşullarını</b> onaylıyorum
                    </span>
                  }
                />
                <button className="cs-loginbutton" type="submit">
                  Kayıt Ol
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="cs-button2div" style={{ padding: "25px 0px" }}>
          <p>
            <i className="fa-solid fa-check cs-check2"></i> HızlıGiriş
            Bilgilerini Güncelle
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
