import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { 
  Users, 
  CreditCard, 
  TrendingUp, 
  ArrowLeft,
  Bot,
  Loader2,
  Shield,
  Mail,
  Calendar,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface UserProfile {
  id: string;
  clerk_user_id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  roles: string[];
}

interface Subscription {
  id: string;
  clerk_user_id: string;
  plan_name: string;
  plan_price: number;
  status: string;
  started_at: string;
  expires_at: string | null;
  profiles: {
    email: string;
    full_name: string | null;
  } | null;
}

interface Stats {
  totalUsers: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
}

const AdminDashboard = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!isLoaded) return;
    
    if (!user) {
      navigate("/auth");
      return;
    }

    checkAdminStatus();
  }, [isLoaded, user, navigate]);

  const checkAdminStatus = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase.functions.invoke('admin', {
        body: { action: 'check_admin', clerkUserId: user.id }
      });

      if (error) throw error;
      
      if (!data.isAdmin) {
        navigate("/dashboard");
        return;
      }
      
      setIsAdmin(true);
      await loadData();
    } catch (error) {
      console.error('Admin check error:', error);
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const loadData = async () => {
    if (!user) return;
    
    try {
      const [usersRes, subsRes, statsRes] = await Promise.all([
        supabase.functions.invoke('admin', {
          body: { action: 'get_users', clerkUserId: user.id }
        }),
        supabase.functions.invoke('admin', {
          body: { action: 'get_subscriptions', clerkUserId: user.id }
        }),
        supabase.functions.invoke('admin', {
          body: { action: 'get_stats', clerkUserId: user.id }
        })
      ]);

      if (usersRes.data?.users) setUsers(usersRes.data.users);
      if (subsRes.data?.subscriptions) setSubscriptions(subsRes.data.subscriptions);
      if (statsRes.data?.stats) setStats(statsRes.data.stats);
    } catch (error) {
      console.error('Load data error:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30"><CheckCircle className="w-3 h-3 mr-1" /> Active</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30"><XCircle className="w-3 h-3 mr-1" /> Cancelled</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"><Clock className="w-3 h-3 mr-1" /> Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading || !isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-narrow py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Dashboard</span>
              </Link>
            </div>
            
            <Link to="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-serif font-semibold">
                <span className="text-gradient">Admin</span>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Admin Panel</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container-narrow py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-serif font-semibold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground mb-8">Manage users and subscriptions</p>

          {/* Stats Cards */}
          {stats && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card-premium p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-semibold">{stats.totalUsers}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card-premium p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Subscriptions</p>
                    <p className="text-2xl font-semibold">{stats.activeSubscriptions}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card-premium p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                    <p className="text-2xl font-semibold">£{stats.monthlyRevenue.toFixed(2)}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-card border border-border/50">
              <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Overview
              </TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Users ({users.length})
              </TabsTrigger>
              <TabsTrigger value="subscriptions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Subscriptions ({subscriptions.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Users */}
                <div className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Recent Users
                  </h3>
                  <div className="space-y-3">
                    {users.slice(0, 5).map((profile) => (
                      <div key={profile.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">
                              {profile.full_name?.charAt(0) || profile.email.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{profile.full_name || 'No name'}</p>
                            <p className="text-xs text-muted-foreground">{profile.email}</p>
                          </div>
                        </div>
                        {profile.roles.includes('admin') && (
                          <Badge className="bg-primary/20 text-primary border-primary/30">Admin</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Subscriptions */}
                <div className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Recent Subscriptions
                  </h3>
                  <div className="space-y-3">
                    {subscriptions.slice(0, 5).map((sub) => (
                      <div key={sub.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                        <div>
                          <p className="text-sm font-medium">{sub.plan_name}</p>
                          <p className="text-xs text-muted-foreground">
                            {sub.profiles?.email || 'Unknown user'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">£{sub.plan_price}</p>
                          {getStatusBadge(sub.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <div className="card-premium overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary/30 border-b border-border/50">
                      <tr>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Email</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Roles</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((profile) => (
                        <tr key={profile.id} className="border-b border-border/30 hover:bg-secondary/20 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="text-sm font-medium text-primary">
                                  {profile.full_name?.charAt(0) || profile.email.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <span className="font-medium">{profile.full_name || 'No name'}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Mail className="w-4 h-4" />
                              {profile.email}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-1">
                              {profile.roles.length > 0 ? (
                                profile.roles.map((role) => (
                                  <Badge 
                                    key={role} 
                                    className={role === 'admin' ? 'bg-primary/20 text-primary border-primary/30' : 'bg-secondary'}
                                  >
                                    {role}
                                  </Badge>
                                ))
                              ) : (
                                <Badge variant="outline">user</Badge>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <Calendar className="w-4 h-4" />
                              {new Date(profile.created_at).toLocaleDateString()}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="subscriptions">
              <div className="card-premium overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary/30 border-b border-border/50">
                      <tr>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Plan</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Price</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Started</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscriptions.map((sub) => (
                        <tr key={sub.id} className="border-b border-border/30 hover:bg-secondary/20 transition-colors">
                          <td className="p-4">
                            <div>
                              <p className="font-medium">{sub.profiles?.full_name || 'Unknown'}</p>
                              <p className="text-sm text-muted-foreground">{sub.profiles?.email}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge variant="outline">{sub.plan_name}</Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium">£{sub.plan_price}/mo</span>
                            </div>
                          </td>
                          <td className="p-4">
                            {getStatusBadge(sub.status)}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <Calendar className="w-4 h-4" />
                              {new Date(sub.started_at).toLocaleDateString()}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminDashboard;