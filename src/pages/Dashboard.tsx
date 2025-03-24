
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { User, Package, Heart, CreditCard, Settings, LogOut } from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");
  
  // Mock user data - would come from authentication context in a real app
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    orders: [
      { id: "ORD-1234", date: "2023-10-15", status: "Delivered", total: 129.99 },
      { id: "ORD-5678", date: "2023-11-28", status: "Processing", total: 89.50 }
    ]
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const handleSaveChanges = () => {
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-2xl md:text-3xl font-bold mb-8">My Account</h1>
          
          <div className="grid md:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-3">
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-6 p-2">
                  <div className="bg-fashion-sage/20 w-12 h-12 rounded-full flex items-center justify-center">
                    <User className="text-fashion-sage" />
                  </div>
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                
                <nav>
                  <ul className="space-y-1">
                    <li>
                      <button 
                        onClick={() => setActiveTab("profile")}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center text-sm ${
                          activeTab === "profile" 
                            ? "bg-fashion-sage text-white font-medium" 
                            : "hover:bg-muted"
                        }`}
                      >
                        <User size={16} className="mr-2" />
                        Profile
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab("orders")}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center text-sm ${
                          activeTab === "orders" 
                            ? "bg-fashion-sage text-white font-medium" 
                            : "hover:bg-muted"
                        }`}
                      >
                        <Package size={16} className="mr-2" />
                        Orders
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab("wishlist")}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center text-sm ${
                          activeTab === "wishlist" 
                            ? "bg-fashion-sage text-white font-medium" 
                            : "hover:bg-muted"
                        }`}
                      >
                        <Heart size={16} className="mr-2" />
                        Wishlist
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab("payment")}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center text-sm ${
                          activeTab === "payment" 
                            ? "bg-fashion-sage text-white font-medium" 
                            : "hover:bg-muted"
                        }`}
                      >
                        <CreditCard size={16} className="mr-2" />
                        Payment Methods
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab("settings")}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center text-sm ${
                          activeTab === "settings" 
                            ? "bg-fashion-sage text-white font-medium" 
                            : "hover:bg-muted"
                        }`}
                      >
                        <Settings size={16} className="mr-2" />
                        Account Settings
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left px-3 py-2 rounded-md flex items-center text-sm text-red-500 hover:bg-red-50"
                      >
                        <LogOut size={16} className="mr-2" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Main content */}
            <div className="md:col-span-9">
              <div className="bg-white rounded-lg border p-6">
                {activeTab === "profile" && (
                  <div>
                    <h2 className="text-xl font-medium mb-4">Profile Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                          <Input id="firstName" defaultValue="Jane" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                        <Input id="email" type="email" defaultValue="jane@example.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                        <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                      </div>
                      <div className="pt-4">
                        <Button onClick={handleSaveChanges}>Save Changes</Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "orders" && (
                  <div>
                    <h2 className="text-xl font-medium mb-4">Order History</h2>
                    {user.orders.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-medium">Order ID</th>
                              <th className="text-left py-3 px-4 font-medium">Date</th>
                              <th className="text-left py-3 px-4 font-medium">Status</th>
                              <th className="text-left py-3 px-4 font-medium">Total</th>
                              <th className="text-left py-3 px-4 font-medium">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user.orders.map((order) => (
                              <tr key={order.id} className="border-b">
                                <td className="py-3 px-4">{order.id}</td>
                                <td className="py-3 px-4">{order.date}</td>
                                <td className="py-3 px-4">
                                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                                    order.status === "Delivered" 
                                      ? "bg-green-100 text-green-800" 
                                      : "bg-blue-100 text-blue-800"
                                  }`}>
                                    {order.status}
                                  </span>
                                </td>
                                <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                                <td className="py-3 px-4">
                                  <Link to={`/order/${order.id}`} className="text-fashion-sage hover:underline text-sm">
                                    View Details
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-muted-foreground">You haven't placed any orders yet.</p>
                    )}
                  </div>
                )}
                
                {activeTab === "wishlist" && (
                  <div>
                    <h2 className="text-xl font-medium mb-4">My Wishlist</h2>
                    <Link to="/wishlist" className="text-fashion-sage hover:underline">
                      View and manage your wishlist items
                    </Link>
                  </div>
                )}
                
                {activeTab === "payment" && (
                  <div>
                    <h2 className="text-xl font-medium mb-4">Saved Payment Methods</h2>
                    <div className="border rounded-md p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-gray-100 rounded p-2 mr-3">
                            <CreditCard className="text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">•••• •••• •••• 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 12/25</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </div>
                    <Button>Add New Payment Method</Button>
                  </div>
                )}
                
                {activeTab === "settings" && (
                  <div>
                    <h2 className="text-xl font-medium mb-4">Account Settings</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Change Password</h3>
                        <div className="space-y-3">
                          <div>
                            <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">Current Password</label>
                            <Input id="currentPassword" type="password" />
                          </div>
                          <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium mb-1">New Password</label>
                            <Input id="newPassword" type="password" />
                          </div>
                          <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm New Password</label>
                            <Input id="confirmPassword" type="password" />
                          </div>
                          <Button>Update Password</Button>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4 mt-4">
                        <h3 className="text-lg font-medium mb-2">Email Preferences</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="marketingEmails" 
                              className="h-4 w-4 rounded border-gray-300 text-fashion-sage focus:ring-fashion-sage mr-2" 
                              defaultChecked
                            />
                            <label htmlFor="marketingEmails" className="text-sm">
                              Receive marketing emails about new products and offers
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="orderEmails" 
                              className="h-4 w-4 rounded border-gray-300 text-fashion-sage focus:ring-fashion-sage mr-2" 
                              defaultChecked
                            />
                            <label htmlFor="orderEmails" className="text-sm">
                              Receive order status updates
                            </label>
                          </div>
                        </div>
                        <Button className="mt-3">Save Preferences</Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
