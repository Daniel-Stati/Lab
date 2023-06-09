import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  CodeOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

function App() {
  return (
    <div className="main_cont">
      <Router>
        <Menu mode="inline">
          <Menu.Item key="home" icon={<CodeOutlined />}>
            <Link to="/">Top 3 Limbaje de Programare</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<SettingOutlined />} title="Opțiuni">
            <Menu.Item key="javascript">
              <Link to="/javascript">JavaScript</Link>
            </Menu.Item>
            <Menu.Item key="python">
              <Link to="/python">Python</Link>
            </Menu.Item>
            <Menu.Item key="java">
              <Link to="/java">Java</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>

        <Routes>
          <Route path="/" element={<h1>Top 3 Limbaje de Programare</h1>} />
          <Route path="/javascript" element={
            <div>
              <h2>JavaScript</h2>
              <p>JavaScript este un limbaj de programare de înaltă nivel utilizat în principal pentru dezvoltarea web. Este un limbaj interpretat care rulează în browser și permite interactivitatea și dinamismul paginilor web.</p>
              <p>Pentru a învăța mai multe despre JavaScript, puteți verifica resursele de mai jos:</p>
              <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide">Ghidul JavaScript MDN</a></li>
                <li><a href="https://www.codecademy.com/learn/introduction-to-javascript">Codecademy - Curs introductiv JavaScript</a></li>
              </ul>
              <h3>Exemplu de cod JavaScript:</h3>
              <pre>
                <code>
                  {`
                    // Exemplu de cod JavaScript
                    function greet(name) {
                      console.log('Salut, ' + name + '!');
                    }
                    
                    greet('John'); // Salut, John!
                  `}
                </code>
              </pre>
            </div>
          } />
          <Route path="/python" element={
            <div>
              <h2>Python</h2>
              <p>Python este un limbaj de programare de înaltă nivel cunoscut pentru simplitatea și claritatea sa. Este utilizat într-o gamă largă de domenii, inclusiv dezvoltarea web, analiza datelor și inteligența artificială.</p>
              <p>Pentru a învăța mai multe despre Python, puteți verifica resursele de mai jos:</p>
              <ul>
                <li><a href="https://www.python.org/">Site-ul oficial Python</a></li>
                <li><a href="https://www.learnpython.org/">LearnPython.org - Tutoriale Python</a></li>
              </ul>
              <h3>Exemplu de cod Python:</h3>
              <pre>
                <code>
                  {`
                    # Exemplu de cod Python
                    def greet(name):
                        print('Salut, ' + name + '!')
                    
                    greet('John') # Salut, John!
                  `}
                </code>
              </pre>
            </div>
          } />
          <Route path="/java" element={
            <div>
              <h2>Java</h2>
              <p>Java este un limbaj de programare orientat pe obiecte, care se bazează pe conceptele de reutilizare și modularitate. Este utilizat în special pentru dezvoltarea de aplicații de tip enterprise și dezvoltarea Android.</p>
              <p>Pentru a învăța mai multe despre Java, puteți verifica resursele de mai jos:</p>
              <ul>
                <li><a href="https://docs.oracle.com/en/java/">Documentația oficială Java</a></li>
                <li><a href="https://www.codecademy.com/learn/learn-java">Codecademy - Curs introductiv Java</a></li>
              </ul>
              <h3>Exemplu de cod Java:</h3>
              <pre>
                <code>
                  {`
                    // Exemplu de cod Java
                    public class HelloWorld {
                        public static void main(String[] args) {
                            System.out.println("Salut, lume!");
                        }
                    }
                  `}
                </code>
              </pre>
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
