function Test2HJ() {
  return (
    <>
      <section>
        <p>Insurance</p>
        <p>* required field</p>
        <div>
          <input type="text" />
          <button></button>
          <input type="radio" />
          <input type="date" />
          <select></select>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
        </div>
      </section>
      <section>
        <p>Patient profile</p>
        <label htmlFor="checkLTC">
          <input type="checkbox" id="checkLTC" />
          LTC
        </label>
        <div>
          <label htmlFor="clinicBranch">
            Clinic Branch *
            <select id="clinicBranch" required defaultValue={""}>
              <option value="" disabled style={{ display: "none" }}>
                Select
              </option>
              <option value="HicareNet">HicareNet</option>
              <option value="hicarenetBrance">hicarenetBrance</option>
              <option value="Text Hicare Branch"> Text Hicare Branch</option>
            </select>
          </label>

          <label htmlFor="lastName">
            Last Name *
            <input type="text" id="lastName" />
          </label>
          <label htmlFor="firstName">
            First Name *
            <input type="text" id="firstName" />
          </label>
          <label htmlFor="middleName">
            Middle Name
            <input type="text" id="middleName" />
          </label>

          <label htmlFor="suffix">
            Suffix
            <select id="suffix" required defaultValue={""}>
              <option value="" disabled style={{ display: "none" }}>
                Select...
              </option>
              <option value="R Junior">JR Junior</option>
              <option value="SR Junior">SR Junior</option>
              <option value="first"> first</option>
              <option value="second"> second</option>
              <option value="third"> third</option>
              <option value="fourth"> fourth</option>
              <option value="fifth"> fifth</option>
              <option value="sixth"> sixth</option>
              <option value="seventh"> seventh</option>
            </select>
          </label>

          <label htmlFor="gender">
            Gender *
            <select id="gender" required defaultValue={""}>
              <option value="" disabled style={{ display: "none" }}>
                Select...
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="x"> X</option>
            </select>
          </label>

          <label htmlFor="birth">
            Date Of Birth * <input type="date" id="birth" />
          </label>
          <label htmlFor="height">
            Height
            <input type="number" id="height" />
          </label>
          <label htmlFor="language">
            Primary Language
            <select id="language" required defaultValue={""}>
              <option value="" disabled style={{ display: "none" }}>
                Select...
              </option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="korean">Korean</option>
            </select>
          </label>

          <label htmlFor="ehrId">
            EHR ID *
            <input type="text" id="ehrId" />
          </label>
          <button> EHR ID Check</button>

          <select></select>

          <label htmlFor="physician">
            Primary Physician *
            <select id="physician" required defaultValue={""}>
              <option value="" disabled style={{ display: "none" }}>
                Select...
              </option>
              <option value="testu">Testu, Ser</option>
              <option value="abx">Abx, Aaa</option>
              <option value="teee"> Teee, St</option>
              <option value="hhh"> Hhh, H</option>
            </select>
          </label>

          <label htmlFor="patientMedication">
            Patient Medication
            <textarea id="patientMedication" />
          </label>

          <label htmlFor="conditions">
            Conditions
            <select id="conditions" required defaultValue={""}>
              <option value="" disabled style={{ display: "none" }}>
                Select...
              </option>
              <option value="alzheimer">Alzheimer's disease</option>
              <option value="bariatrics">Bariatrics</option>
              <option value="cancer">Cancer</option>
              <option value="dementia"> Dementia</option>
            </select>
          </label>
        </div>
      </section>

      <section>
        <p>Contact</p>
        <div>
          <select></select>
          <input type="number"></input>
          <button></button>
          <input type="email"></input>
          <button></button>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <select></select>
          <input type="number"></input>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
        </div>
        <button></button>
      </section>
    </>
  );
}

export default Test2HJ;
