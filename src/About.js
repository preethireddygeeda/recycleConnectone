

import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Recycle Connect",
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h1>About us </h1>
        <p>Recycle Connect is a platform designed to facilitate and streamline the process of recycling</p>
        <ul>
          <li>
            <p>
              <h2>Purpose: </h2>
              <li>Recycle Connect aims to connect individuals, businesses, and communities with recycling resources and opportunities. It serves as a centralized platform to promote recycling and sustainable waste management practices.
          </li>  </p>
          </li>
          <li>
            <p>
              <h2>Features:</h2>
              <ul>
                <li><h3>Database: </h3><h4>Recycle Connect maintains a comprehensive database of recycling centers, drop-off locations, and collection programs across various regions.</h4></li>
                <li><h3>Search Functionality:</h3><h4> Users can easily search for recycling facilities or programs based on their location, the materials they want to recycle, or specific recycling services they require.</h4></li>
                <li><h3>Educational Resources:</h3><h4> The platform provides information and resources to educate users about recycling best practices, waste reduction strategies, and environmental conservation efforts.</h4></li>
                <li><h3>Community Engagement:</h3><h4> Recycle Connect fosters community engagement by promoting local recycling initiatives, events, and volunteer opportunities.</h4></li>
              </ul>
            </p>
          </li>
          <li>
            <p>
             <h2> Benefits:</h2>
              <ul>
                <li><h3>Convenience:</h3><h4> By offering a centralized database of recycling resources, Recycle Connect makes it easier for individuals and businesses to find recycling options in their area.</h4></li>
                <li><h3>Sustainability:</h3> <h4>By promoting recycling and proper waste management practices, Recycle Connect contributes to environmental sustainability by reducing the amount of waste sent to landfills and conserving natural resources.</h4></li>
                <li><h3>Cost Savings: </h3><h4>Recycling can often be more cost-effective than disposing of waste in landfills. By encouraging recycling, Recycle Connect helps individuals and businesses save money on waste disposal costs.</h4></li>
              </ul>
            </p>
          </li>
        </ul>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <a href="https://example.com" style={{ textAlign: "center" }}>
        <img src="https://media.licdn.com/dms/image/C4D1BAQFzoei5yjDcow/company-background_10000/0/1602510871601/recycleconnect_cover?e=2147483647&v=beta&t=NuJcn6g5hw9FmKujz--ttQ-qNMDxpdPJ79ILqNDJI9k" alt="Recycle Connect" style={{ maxWidth: "70%", height: "50%" }} />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <img src="https://as2.ftcdn.net/v2/jpg/02/76/16/79/1000_F_276167982_WKqbnhP7wsm8QtnL8qXStf75o0IUkcF6.jpg" alt="Recycle Connect" style={{ maxWidth: "70%", height: "50%" }} />
        
        </a>
      </div>
    </div>
  );
};

export default About;
