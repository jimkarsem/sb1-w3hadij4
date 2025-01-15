import React from 'react';
import { Brain, Clock, Shield, BarChart3, Users, Zap, CheckCircle2, Boxes } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Project Management with
            <span className="text-primary-600"> AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Revolutionize your project workflow with AI-powered automation for budgets, schedules, and resource management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white text-primary-600 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors font-semibold">
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful AI Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <FeatureCard
            icon={Brain}
            title="AI-Powered Planning"
            description="Intelligent project planning and optimization using advanced AI algorithms"
          />
          <FeatureCard
            icon={Clock}
            title="Smart Scheduling"
            description="Automated schedule generation and resource allocation optimization"
          />
          <FeatureCard
            icon={Shield}
            title="Risk Management"
            description="Predictive risk analysis and mitigation strategies"
          />
          <FeatureCard
            icon={BarChart3}
            title="Budget Tracking"
            description="Real-time budget monitoring and expense optimization"
          />
          <FeatureCard
            icon={Users}
            title="Team Management"
            description="Intelligent team assignment and workload balancing"
          />
          <FeatureCard
            icon={Zap}
            title="Automation"
            description="Streamlined workflows and automated documentation"
          />
          <FeatureCard
            icon={CheckCircle2}
            title="Quality Management"
            description="AI-driven quality assurance and continuous improvement tracking"
          />
          <FeatureCard
            icon={Boxes}
            title="Resource Management"
            description="Smart allocation and optimization of project resources and assets"
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop&auto=format" alt="Company logo" className="h-12 object-contain mx-auto" />
              <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200&h=100&fit=crop&auto=format" alt="Company logo" className="h-12 object-contain mx-auto" />
              <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=200&h=100&fit=crop&auto=format" alt="Company logo" className="h-12 object-contain mx-auto" />
              <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=200&h=100&fit=crop&auto=format" alt="Company logo" className="h-12 object-contain mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center bg-primary-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Project Management?</h2>
          <p className="text-lg mb-8 text-primary-100">
            Join thousands of teams already using Project Works to streamline their projects.
          </p>
          <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Project Works</h3>
              <p className="text-sm">
                AI-powered project management platform for modern teams.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Project Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;