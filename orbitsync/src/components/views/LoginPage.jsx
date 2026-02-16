import React, { useState } from 'react';
import { User, Lock, ArrowRight, Rocket } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        setTimeout(() => {
            onLogin();
        }, 1500);
    };

    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="glass-card p-8 w-full max-w-md relative z-10 border-white/10 shadow-2xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(0,247,255,0.3)]">
                        <Rocket size={32} className="text-white transform -rotate-45" />
                    </div>
                    <h2 className="text-3xl font-bold text-white tracking-wider">WELCOME CADET</h2>
                    <p className="text-white/40 text-sm mt-2">Enter your credentials to access the observatory.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[--text-secondary] uppercase tracking-wider ml-1">ID Code</label>
                        <div className="relative group">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-neon-cyan transition-colors" size={18} />
                            <input
                                type="email"
                                placeholder="cadet@stellar.edu"
                                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[--text-primary] placeholder:text-white/20 focus:outline-none focus:border-neon-cyan/50 focus:bg-black/40 transition-all font-mono"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[--text-secondary] uppercase tracking-wider ml-1">Passcode</label>
                        <div className="relative group">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-neon-cyan transition-colors" size={18} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[--text-primary] placeholder:text-white/20 focus:outline-none focus:border-neon-cyan/50 focus:bg-black/40 transition-all font-mono"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-neon-cyan to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Initializing...
                            </span>
                        ) : (
                            <>
                                Initiate Launch <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-xs text-white/30">
                        Restricted Access. Unauthorized personnel will be ejected into the void.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
