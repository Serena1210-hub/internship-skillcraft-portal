import React, { useState, useEffect } from 'react';
import { Camera, Mail, User as UserIcon, Calendar, Book, Award, Settings, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: user?.email || '',
    phone: '',
    university: '',
    major: '',
    graduationYear: '',
    gpa: '',
    track: 'software',
    bio: '',
    linkedIn: '',
    github: '',
    portfolio: ''
  });

  useEffect(() => {
    loadProfileData();
  }, [user]);

  const loadProfileData = async () => {
    if (!user) return;
    
    try {
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfileData(prev => ({ ...prev, ...data }));
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const docRef = doc(db, 'users', user.uid);
      await updateDoc(docRef, {
        ...profileData,
        updatedAt: new Date().toISOString()
      });
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          
          {/* Profile Info */}
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-6">
              <div className="flex items-end space-x-4">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-32 h-32 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white font-bold text-4xl">
                      {profileData.fullName?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                  </div>
                  <button className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Camera className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Name & Email */}
                <div className="pb-2">
                  <h2 className="text-2xl font-bold">
                    {profileData.fullName || 'Complete Your Profile'}
                  </h2>
                  <p className="text-gray-600 flex items-center mt-1">
                    <Mail className="w-4 h-4 mr-2" />
                    {profileData.email}
                  </p>
                </div>
              </div>

              {/* Edit Button */}
              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                disabled={saving}
                className="mt-4 md:mt-0 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {profileData.track === 'software' ? '💻' : '🛡️'}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {profileData.track === 'software' ? 'Software Eng.' : 'Cybersecurity'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{profileData.gpa || '--'}</div>
                <p className="text-sm text-gray-600 mt-1">GPA</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{profileData.graduationYear || '--'}</div>
                <p className="text-sm text-gray-600 mt-1">Grad Year</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  <Award className="w-8 h-8 mx-auto text-yellow-500" />
                </div>
                <p className="text-sm text-gray-600 mt-1">Intern</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <UserIcon className="w-5 h-5 mr-2" />
              Personal Information
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              ) : (
                <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
                  {profileData.fullName || 'Not set'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <p className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600">
                {profileData.email}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              ) : (
                <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
                  {profileData.phone || 'Not set'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="university"
                  value={profileData.university}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Harvard University"
                />
              ) : (
                <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
                  {profileData.university || 'Not set'}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <Book className="w-5 h-5 mr-2" />
              Academic Information
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Major / Field of Study
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="major"
                  value={profileData.major}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Computer Science"
                />
              ) : (
                <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
                  {profileData.major || 'Not set'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Graduation Year
              </label>
              {isEditing ? (
                <input
                  type="number"
                  name="graduationYear"
                  value={profileData.graduationYear}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="2026"
                  min="2024"
                  max="2030"
                />
              ) : (
                <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
                  {profileData.graduationYear || 'Not set'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current GPA
              </label>
              {isEditing ? (
                <input
                  type="number"
                  name="gpa"
                  value={profileData.gpa}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="3.75"
                  min="0"
                  max="4"
                  step="0.01"
                />
              ) : (
                <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
                  {profileData.gpa || 'Not set'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Internship Track
              </label>
              {isEditing ? (
                <select
                  name="track"
                  value={profileData.track}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="software">Software Engineering</option>
                  <option value="cybersecurity">Cybersecurity</option>
                </select>
              ) : (
                <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
                  {profileData.track === 'software' ? 'Software Engineering' : 'Cybersecurity'}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio / About Me
            </label>
            {isEditing ? (
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Tell us about yourself, your interests, and career goals..."
              />
            ) : (
              <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 min-h-[100px]">
                {profileData.bio || 'Not set'}
              </p>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Social & Portfolio Links
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile
              </label>
              {isEditing ? (
                <input
                  type="url"
                  name="linkedIn"
                  value={profileData.linkedIn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              ) : (
                <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 truncate">
                  {profileData.linkedIn || 'Not set'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GitHub Profile
              </label>
              {isEditing ? (
                <input
                  type="url"
                  name="github"
                  value={profileData.github}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="https://github.com/yourusername"
                />
              ) : (
                <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 truncate">
                  {profileData.github || 'Not set'}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio Website
              </label>
              {isEditing ? (
                <input
                  type="url"
                  name="portfolio"
                  value={profileData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="https://yourportfolio.com"
                />
              ) : (
                <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 truncate">
                  {profileData.portfolio || 'Not set'}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Account Settings
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive updates about your application and program</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">
                Enable
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
              <div>
                <h4 className="font-medium text-red-900">Delete Account</h4>
                <p className="text-sm text-red-700">Permanently delete your account and all data</p>
              </div>
              <button className="px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white font-medium transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Cancel Button (only shown when editing) */}
        {isEditing && (
          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={() => {
                setIsEditing(false);
                loadProfileData(); // Reset to original data
              }}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;