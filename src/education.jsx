import './default.css';
import e1 from '../src/assets/e1.jpg';
import e2 from '../src/assets/e2.jpg';
import e3 from '../src/assets/e3.jpg';

export default function Education() {
    return (
        <div className="page-container">
            <div className="page-content">

                <div className="card">
                    <img src={e1} alt="Centennial College" className="education-image" />
                    <div className="card-content">
                        <h2>Centennial College</h2>
                        <ul className="text-content">
                            <li><strong>Degree:</strong> Software Engineering</li>
                            <li><strong>Date:</strong> In Progress</li>
                            <li><strong>Country:</strong> Canada</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <img src={e2} alt="FIAP" className="education-image" />
                    <div className="card-content">
                        <h2>FIAP</h2>
                        <ul className="text-content">
                            <li><strong>Degree:</strong> MBA in Cyber Security</li>
                            <li><strong>Date:</strong> 2021</li>
                            <li><strong>Country:</strong> Brazil</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <img src={e3} alt="Universidade Cuzeiro do Sul" className="education-image" />
                    <div className="card-content">
                        <h2>Universidade Cuzeiro do Sul</h2>
                        <ul className="text-content">
                            <li><strong>Degree:</strong> Bachelor in System Analysis</li>
                            <li><strong>Date:</strong> 2010</li>
                            <li><strong>Country:</strong> Brazil</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
