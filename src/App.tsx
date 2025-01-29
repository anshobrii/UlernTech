import React, { useEffect, useState } from 'react';
import { Settings, Server, Cpu, Download, Clock, Database, Shield, RefreshCw, Layers } from 'lucide-react';
import SnakeGame from './components/SnakeGame';

function App() {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(1);
  const phases = ['Security Updates', 'System Optimization', 'Performance Tuning'];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        if (prev === 33) setCurrentPhase(2);
        if (prev === 66) setCurrentPhase(3);
        return prev + 0.5;
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] opacity-10 animate-float">
          <Server size={100} className="text-blue-400" />
        </div>
        <div className="absolute bottom-[15%] right-[15%] opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Database size={100} className="text-teal-400" />
        </div>
        <div className="absolute top-[40%] right-[20%] opacity-10 animate-float" style={{ animationDelay: '4s' }}>
          <Cpu size={100} className="text-cyan-400" />
        </div>
        <div className="absolute bottom-[30%] left-[20%] opacity-10 animate-float" style={{ animationDelay: '3s' }}>
          <Shield size={100} className="text-indigo-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative mb-8 animate-float">
            <Settings className="w-32 h-32 text-blue-400 animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse-glow" />
            </div>
          </div>

          <h1 className="text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400">
            System Maintenance
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl text-center leading-relaxed">
            Our systems are undergoing critical updates to enhance your experience. 
            We're implementing advanced security protocols and performance optimizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Status Section */}
          <div className="space-y-6">
            {/* Current Phase */}
            <div className="glass-effect rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <RefreshCw className="text-blue-400 animate-spin-slow" />
                  <h2 className="text-xl font-semibold">Current Phase: {currentPhase}/3</h2>
                </div>
                <span className="text-teal-400 font-medium">{phases[currentPhase - 1]}</span>
              </div>

              {/* Progress Timeline */}
              <div className="relative h-2 bg-slate-700/50 rounded-full mb-6 overflow-hidden">
                <div 
                  className="absolute h-full w-full bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 transition-transform duration-1000 ease-out"
                  style={{ transform: `translateX(-${100 - progress}%)` }}
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-effect rounded-xl p-4 border border-slate-700/50 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{Math.round(progress)}%</div>
                  <div className="text-slate-400">Progress</div>
                </div>
                <div className="glass-effect rounded-xl p-4 border border-slate-700/50 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-teal-400 mb-2">
                    <Clock className="inline-block w-8 h-8" />
                  </div>
                  <div className="text-slate-400">24h ETA</div>
                </div>
                <div className="glass-effect rounded-xl p-4 border border-slate-700/50 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    <Layers className="inline-block w-8 h-8" />
                  </div>
                  <div className="text-slate-400">Systems</div>
                </div>
              </div>
            </div>

            {/* System Report */}
            <div className="glass-effect rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Download className="text-blue-400" />
                System Report
              </h2>
              <p className="text-slate-300 mb-6">
                Access detailed information about the ongoing maintenance and system updates
              </p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Report
              </button>
            </div>
          </div>

          {/* Snake Game */}
          <SnakeGame />
        </div>
      </div>
    </div>
  );
}

export default App;