import { Card, CardContent } from "../components/ui/card";
import { CircuitBoard, Cpu, Zap, Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-wide flex justify-center items-center gap-3">
          <CircuitBoard className="w-12 h-12 text-blue-400" />
          Izedin Oumer
        </h1>
        <p className="text-gray-400 mt-2">Electrical & Computer Engineering | Circuit Systems Portfolio</p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="mailto:izedinao@gmail.com"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 p-2 rounded-lg"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
          <a
            href="https://linkedin.com/in/izedinoumer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 p-2 rounded-lg"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-400 inline-block mb-6">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-300">The Ohio State University</h3>
              <p>Bachelor of Science in Electrical and Computer Engineering (Expected May 2027)</p>
              <p className="text-gray-400">Relevant Courses: Circuit Analysis, Digital Logic Design, Microprocessors, Signals and Systems</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-300">Columbus State Community College</h3>
              <p>Associate of Applied Science | GPA: 3.75</p>
              <p className="text-gray-400">Aug 2021 – Dec 2022</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-400 inline-block mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold flex items-center gap-2 text-blue-300"><Cpu className="text-blue-400" /> Programming</h3>
              <p className="text-gray-400">MATLAB, Python, C, C++, Java, Assembly, VHDL, Verilog</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold flex items-center gap-2 text-blue-300"><Zap className="text-blue-400" /> Software</h3>
              <p className="text-gray-400">Arduino, Simulink, SolidWorks, Quartus Prime, Altera, AutoCAD</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold flex items-center gap-2 text-blue-300"><CircuitBoard className="text-blue-400" /> Hardware</h3>
              <p className="text-gray-400">Prototyping, PCB design, FPGA design, Circuit Design, Schematic Analysis</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-400 inline-block mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-300">Automatic Marble Sorter</h3>
              <p className="text-gray-400">Designed and built an automated marble sorting machine with 95% accuracy using Arduino, SolidWorks, and C++.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-300">Object Avoidance Robot</h3>
              <p className="text-gray-400">Developed an autonomous robot with ultrasonic sensors to detect and avoid obstacles, validated through real-world testing.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leadership */}
      <section>
        <h2 className="text-3xl font-semibold border-b-2 border-blue-400 inline-block mb-6">Leadership & Development</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-300">Ethiopian Student Organization (ESO)</h3>
              <p className="text-gray-400">Co-Founder & Creative Director | Aug 2022 – Apr 2025</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-300">Buckeye Space Launch Initiative</h3>
              <p className="text-gray-400">Liquid Engine Team Member | Aug 2024 – Mar 2025</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 border-t border-gray-700 pt-6 text-gray-400">
        <p>© 2025 Izedin Oumer | Circuit Portfolio</p>
      </footer>
    </div>
  );
}