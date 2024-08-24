import React, { useState } from "react";
import { db, storage } from "../../config/firebase"; // Import storage from firebase
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Props for InputField Component
interface InputFieldProps {
  type: string;
  placeholder: string;
  required?: boolean;
  extraClasses?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Input Field Component
const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  required,
  extraClasses,
  value,
  onChange
}) => {
  return (
    <input
      type={type}
      className={`w-full p-3 border rounded-full outline-none ${extraClasses}`}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

// Props for Checkbox Component
interface CheckboxProps {
  id: string;
  label: React.ReactNode;
  required?: boolean;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Checkbox Component
const Checkbox: React.FC<CheckboxProps> = ({ id, label, required, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" id={id} className="mr-2" required={required} checked={checked} onChange={onChange} />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </div>
  );
};

// Props for FileInput Component
interface FileInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// File Input Component
const FileInput: React.FC<FileInputProps> = ({ label, value, onChange }) => {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input type="file" className="w-full p-3 border rounded-md" value={value} onChange={onChange} />
    </label>
  );
};

const JoinUsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [githubProfile, setGithubProfile] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [resume, setResume] = useState<File | null>(null); // Change to File
  const [terms, setTerms] = useState(false);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (terms) {
      let resumeURL = "";

      if (resume) {
        const storageRef = ref(storage, `resumes/${firstName}_${lastName}_${Date.now()}`);
        const snapshot = await uploadBytes(storageRef, resume);
        resumeURL = await getDownloadURL(snapshot.ref);
      }

      const formData = {
        firstName,
        middleName,
        lastName,
        email,
        country,
        phoneNumber,
        githubProfile,
        linkedInProfile,
        referralCode,
        resume: resumeURL,
        terms
      };

      console.log(formData);

      try {
        const docRef = await addDoc(collection(db, "data"), formData);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      setFirstName("");
      setMiddleName("");
      setLastName("");
      setEmail("");
      setCountry("");
      setPhoneNumber("");
      setGithubProfile("");
      setLinkedInProfile("");
      setReferralCode("");
      setResume(null);
      setTerms(false);
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  return (
    <section id="join-us-form" className="w-full p-10 my-20 bg-[#f6f8fa]">
      <div className="flex justify-center shadow-lg rounded-2xl">
        <div className="hidden min-h-full w-2/5 lg:flex items-center justify-center">
          <img
            src="/uniford-main/form.jpeg"
            alt="..."
            className="rounded-2xl"
          />
        </div>
        <div className="rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
            Join Us Become{" "}
            <span className="text-[#20476d]">A Uniford Member</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <InputField
                type="text"
                placeholder="First Name*"
                required={true}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputField 
                type="text" 
                placeholder="Middle Name" 
                value={middleName} 
                onChange={(e) => setMiddleName(e.target.value)}
              />
              <InputField
                type="text"
                placeholder="Last Name*"
                required={true}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <InputField
                type="email"
                placeholder="Email Address*"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <InputField 
                type="text" 
                placeholder="Country" 
                value={country}
                onChange={(e) => setCountry(e.target.value)} 
              />
              <div className="flex">
                <span className="text-nowrap flex items-center px-3 border border-r-0 rounded-l-md bg-gray-200 text-gray-600">
                  IND (+91)
                </span>
                <InputField
                  type="text"
                  placeholder="Phone Number"
                  extraClasses="flex-grow rounded-l-none"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <InputField
                type="text"
                placeholder="Share Your Github Profile Link"
                value={githubProfile}
                onChange={(e) => setGithubProfile(e.target.value)}
              />
              <InputField
                type="text"
                placeholder="Share Your LinkedIn Profile Link"
                value={linkedInProfile}
                onChange={(e) => setLinkedInProfile(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <InputField 
                type="text" 
                placeholder="Have a referral code?" 
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <FileInput 
                label="Attach Your Resume" 
                value={resume ? resume.name : ""}
                onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
              />
            </div>
            <div className="mb-4">
              <Checkbox
                id="terms"
                label={
                  <span className="text-black">
                    I agree with the{" "}
                    <a href="#" className="text-blue-600">
                      terms and conditions
                    </a>{" "}
                    and verify the information provided above are correct
                  </span>
                }
                required={true}
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              />
            </div>
            <button
              type="submit"
              className="w-fit bg-blue-600 text-white p-3 rounded-full"
            >
              Submit Your Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUsForm;
