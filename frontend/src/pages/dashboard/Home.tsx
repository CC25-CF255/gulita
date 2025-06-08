import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Welcome to Gulita Dashboard, Patrick!</h2>
      <p className="text-lg text-gray-700 mb-8">
        Here you can view your diabetes test results, track your health, and manage your profile settings.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Last Risk Score</CardTitle>
            <CardDescription>Your most recent diabetes risk result</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-blue-600">-</span>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link to="/dashboard/result">View Results</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tests Taken</CardTitle>
            <CardDescription>Total diabetes tests completed</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-blue-600">-</span>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link to="/dashboard/check">Take New Test</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Profile Overview</CardTitle>
            <CardDescription>Quick access to your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-blue-600">-</span>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link to="/dashboard/profile">Go to Profile</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>See your latest diabetes checks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">No recent activity. Take a test to see your results here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Health Tips</CardTitle>
            <CardDescription>Stay healthy with these tips</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Maintain a balanced diet and exercise regularly.</li>
              <li>Monitor your blood sugar levels.</li>
              <li>Schedule regular check-ups with your doctor.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
