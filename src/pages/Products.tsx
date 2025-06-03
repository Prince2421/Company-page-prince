
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      name: "CloudSync Pro",
      description: "Advanced cloud synchronization platform for enterprise teams",
      price: "$99/mo",
      category: "Software",
      image: "☁️",
      features: [
        "Real-time synchronization",
        "Enterprise security",
        "99.9% uptime guarantee",
        "24/7 support"
      ]
    },
    {
      name: "DataFlow Analytics",
      description: "Powerful data visualization and analytics dashboard",
      price: "$149/mo",
      category: "Analytics",
      image: "📊",
      features: [
        "Interactive dashboards",
        "Machine learning insights",
        "Custom reporting",
        "API integration"
      ]
    },
    {
      name: "SecureVault",
      description: "Military-grade encryption for sensitive data storage",
      price: "$79/mo",
      category: "Security",
      image: "🔒",
      features: [
        "256-bit encryption",
        "Zero-knowledge architecture",
        "Compliance ready",
        "Audit trails"
      ]
    },
    {
      name: "WorkFlow Automation",
      description: "Streamline your business processes with smart automation",
      price: "$199/mo",
      category: "Automation",
      image: "⚡",
      features: [
        "Visual workflow builder",
        "1000+ integrations",
        "Smart triggers",
        "Performance analytics"
      ]
    },
    {
      name: "TeamCollab Hub",
      description: "Next-generation collaboration platform for remote teams",
      price: "$59/mo",
      category: "Collaboration",
      image: "👥",
      features: [
        "HD video conferencing",
        "Shared workspaces",
        "Project management",
        "File sharing"
      ]
    },
    {
      name: "AI Assistant Pro",
      description: "Intelligent virtual assistant powered by advanced AI",
      price: "$299/mo",
      category: "AI",
      image: "🤖",
      features: [
        "Natural language processing",
        "Custom training",
        "Multi-language support",
        "Integration ready"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of solutions designed to accelerate your business growth 
            and streamline your operations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search products..." 
              className="pl-10 py-3 border-gray-300 focus:border-blue-500"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 px-6">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team of experts can create tailored solutions that perfectly fit your unique business requirements.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
