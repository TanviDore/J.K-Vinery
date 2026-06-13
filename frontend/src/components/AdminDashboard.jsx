import React, { useState, useEffect } from 'react';
import { Download, Search, RefreshCw, Calendar, ArrowLeft, Grape } from 'lucide-react';

export default function AdminDashboard() {
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchVisitors = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/visitors');
      const data = await response.json();
      if (response.ok && data.success) {
        setVisitors(data.data);
        setFilteredVisitors(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch visitor data');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Server connection failed. Make sure the backend server is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  // Filter visitors based on search query
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = visitors.filter(
      (v) =>
        v.name.toLowerCase().includes(term) ||
        v.address.toLowerCase().includes(term) ||
        v.purposeOfVisit.toLowerCase().includes(term) ||
        v.contactNumber.includes(term)
    );
    setFilteredVisitors(filtered);
  }, [searchTerm, visitors]);

  // Export to CSV Function
  const exportToCSV = () => {
    if (filteredVisitors.length === 0) return;

    // Define CSV headers
    const headers = ['Submitted Date', 'Full Name', 'Contact Number', 'Email', 'Address', 'Purpose of Visit', 'Preferred Visit Date'];
    
    // Map data to rows
    const rows = filteredVisitors.map((v) => [
      new Date(v.createdAt).toLocaleDateString(),
      `"${v.name.replace(/"/g, '""')}"`,
      `"${v.contactNumber}"`,
      `"${v.email || ''}"`,
      `"${v.address.replace(/"/g, '""')}"`,
      `"${v.purposeOfVisit.replace(/"/g, '""')}"`,
      new Date(v.preferredVisitDate).toLocaleDateString()
    ]);

    // Construct CSV content
    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(','))
    ].join('\n');

    // Create file download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `jkfarm_visitors_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 border-b border-stone-200 pb-8">
          <div>
            <div className="flex items-center space-x-2">
              <Grape className="h-8 w-8 text-purple-700" />
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900">
                J.K. Farm Admin Panel
              </span>
            </div>
            <p className="mt-1 text-sm text-stone-500">
              Manage and export scheduled farm visit requests
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="flex items-center space-x-1.5 rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-50"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Website</span>
            </a>
            
            <button
              onClick={fetchVisitors}
              className="flex items-center space-x-1.5 rounded-xl border border-stone-200 bg-white p-2.5 text-stone-700 hover:bg-stone-50"
              title="Refresh Data"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            
            <button
              onClick={exportToCSV}
              disabled={filteredVisitors.length === 0}
              className="flex items-center space-x-1.5 rounded-xl bg-purple-700 px-4 py-2.5 text-sm font-bold text-white shadow-md hover:bg-purple-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Dashboard statistics */}
        <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3">
          <div className="rounded-2xl border border-stone-200/50 bg-white p-6 shadow-sm">
            <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Total Requests</h4>
            <p className="mt-2 text-3xl font-bold text-stone-900">{visitors.length}</p>
          </div>
          <div className="rounded-2xl border border-stone-200/50 bg-white p-6 shadow-sm">
            <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Filtered Count</h4>
            <p className="mt-2 text-3xl font-bold text-purple-700">{filteredVisitors.length}</p>
          </div>
          <div className="rounded-2xl border border-stone-200/50 bg-white p-6 shadow-sm">
            <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Upcoming Visits</h4>
            <p className="mt-2 text-3xl font-bold text-green-700">
              {visitors.filter(v => new Date(v.preferredVisitDate) >= new Date().setHours(0,0,0,0)).length}
            </p>
          </div>
        </div>

        {/* Search filter bar */}
        <div className="mt-8 flex rounded-2xl border border-stone-200/50 bg-white p-4 shadow-sm">
          <div className="relative w-full max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search by visitor name, address, or purpose..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full rounded-xl border border-stone-200 bg-stone-50 py-2.5 pl-10 pr-4 text-sm text-stone-900 placeholder-stone-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Visitors Table Content */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200/50 bg-white shadow-sm">
          {loading ? (
            <div className="flex h-64 flex-col items-center justify-center space-y-3">
              <RefreshCw className="h-8 w-8 animate-spin text-purple-700" />
              <p className="text-sm font-medium text-stone-500">Loading registrations...</p>
            </div>
          ) : error ? (
            <div className="flex h-64 flex-col items-center justify-center p-6 text-center">
              <div className="rounded-full bg-red-50 p-3 text-red-600">
                <ArrowLeft className="h-6 w-6 rotate-90" />
              </div>
              <h4 className="mt-4 font-bold text-lg text-stone-900">Database Connection Failed</h4>
              <p className="mt-2 text-sm text-stone-500 max-w-md">{error}</p>
              <button
                onClick={fetchVisitors}
                className="mt-5 rounded-xl bg-purple-700 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-purple-800"
              >
                Try Reconnecting
              </button>
            </div>
          ) : filteredVisitors.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center text-center p-6">
              <Calendar className="h-10 w-10 text-stone-300" />
              <h4 className="mt-4 font-bold text-lg text-stone-900">No Visitor Requests Found</h4>
              <p className="mt-1 text-sm text-stone-500">
                {searchTerm ? 'No results matched your search query.' : 'No registrations exist yet.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-left text-sm">
                <thead className="bg-stone-50 font-semibold text-stone-700 uppercase tracking-wider text-xs border-b border-stone-200">
                  <tr>
                    <th scope="col" className="px-6 py-4">Submission Date</th>
                    <th scope="col" className="px-6 py-4">Name</th>
                    <th scope="col" className="px-6 py-4">Contact Info</th>
                    <th scope="col" className="px-6 py-4">Address</th>
                    <th scope="col" className="px-6 py-4">Purpose of Visit</th>
                    <th scope="col" className="px-6 py-4">Preferred Visit Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 bg-white text-stone-600">
                  {filteredVisitors.map((visitor) => (
                    <tr key={visitor._id} className="hover:bg-stone-50/55 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-stone-500 text-xs font-medium">
                        {formatDate(visitor.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-semibold text-stone-900">
                        {visitor.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-stone-800">{visitor.contactNumber}</div>
                        {visitor.email && <div className="text-stone-400 text-xs">{visitor.email}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <p className="line-clamp-2 max-w-xs text-xs">{visitor.address}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block rounded-lg bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700">
                          {visitor.purposeOfVisit}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-purple-700 text-xs">
                        {formatDate(visitor.preferredVisitDate)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
