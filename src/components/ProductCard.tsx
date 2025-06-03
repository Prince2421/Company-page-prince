
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  features: string[];
}

const ProductCard = ({ name, description, price, category, image, features }: ProductCardProps) => {
  const productDetails = {
    specifications: [
      "Cloud-based infrastructure",
      "Cross-platform compatibility", 
      "Advanced security protocols",
      "Scalable architecture"
    ],
    support: [
      "24/7 customer support",
      "Comprehensive documentation",
      "Video tutorials",
      "Community forum"
    ],
    pricing: [
      "14-day free trial",
      "No setup fees",
      "Cancel anytime",
      "Volume discounts available"
    ]
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-gray-200">
      <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-6xl text-blue-500 opacity-50">
            {image}
          </div>
        </div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            {category}
          </Badge>
          <span className="text-2xl font-bold text-blue-600">{price}</span>
        </div>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full mb-3 justify-between hover:bg-blue-50"
            >
              View Details
              <Maximize2 className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center justify-between">
                <span>{name}</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {category}
                </Badge>
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden mb-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-8xl text-blue-500 opacity-50">
                        {image}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Description</h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">{price}</div>
                    <p className="text-sm text-blue-600">per month</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                  <ul className="space-y-2">
                    {productDetails.specifications.map((spec, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Support & Resources</h4>
                  <ul className="space-y-2">
                    {productDetails.support.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Pricing Details</h4>
                  <ul className="space-y-2">
                    {productDetails.pricing.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
                <Button variant="outline" className="flex-1">
                  Request Demo
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
