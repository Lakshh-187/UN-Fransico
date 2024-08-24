'use client';
import { useSelector } from 'react-redux';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
import { updateUserDoc } from '../../services/firestore';

function Settings() {
  // const [aboutState, setAbout] = useState('');
  const {
    userData: { uid, about, email, displayName, clgName }
  } = useSelector((state) => state.user);

  const schema = yup.object({
    displayName: yup.string().required(),
    clgName: yup.string().required(),
    email: yup.string().required(),
    about: yup.string().min(30).required()
  });

  const {
    register,
    formState: { errors },
    handleSubmit,

    watch,
    reset
  } = useForm({
    defaultValues: {
      displayName: displayName,
      clgName: clgName,
      email: email,
      about: about
    },
    resolver: yupResolver(schema)
  });

  const [filesSelected, setFilesSelected] = useState(false);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: () => setFilesSelected(true)
  });

  function updateProfile(data) {
    // don't reset post update as it would cost an extra read which in itself is going to happen when user again loads the settings page
    updateUserDoc(uid, data);
  }

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const InputField = ({ label, type, value, disabled, name }) => {
    console.log(name, 'Heere');
    return (
      <div className="flex flex-col w-full">
        <label htmlFor={label}>{label}</label>
        <input
          {...register(name)}
          className="rounded-xl bg-gray-200 border-none outline-none px-3 py-2"
        />
        {/* <p className="text-red-300">{errors.name && errors.name.message}</p> */}
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit(updateProfile)}
      className="flex flex-col gap-4 p-10 border shadow-xl rounded-xl bg-white">
      <div className="flex lg:flex-row flex-col justify-between gap-5">
        <div className="flex flex-col w-full">
          <label htmlFor={'displayName'}>Display Name</label>
          <input
            {...register('displayName')}
            className="rounded-xl bg-gray-200 border-none outline-none px-3 py-2"
          />
          <p className="text-red-300">{errors.displayName && errors.displayName.message}</p>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor={'displayName'}>Display Name</label>
          <input
            {...register('displayName')}
            className="rounded-xl bg-gray-200 border-none outline-none px-3 py-2"
          />
          <p className="text-red-300">{errors.displayName && errors.displayName.message}</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col  justify-between gap-5">
        <div className="flex flex-col w-full">
          <label htmlFor={'clgName'}>College Name</label>
          <input
            {...register('clgName')}
            className="rounded-xl bg-gray-200 border-none outline-none px-3 py-2"
          />
          <p className="text-red-300">{errors.clgName && errors.clgName.message}</p>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor={'Email'}>Email</label>
          <input
            {...register('email')}
            className="rounded-xl bg-gray-200 border-none outline-none px-3 py-2"
          />
          <p className="text-red-300">{errors.email && errors.email.message}</p>
        </div>
        {/* <InputField name="email" label="Email" type="email" value={email} disabled={true} /> */}
      </div>

      <div className="flex">
        <div className="w-full lg:flex-row flex-col flex gap-6">
          <div className="flex w-full flex-col">
            <label htmlFor="explanation">About</label>
            <textarea
              {...register('about')}
              rows="10"
              className="bg-gray-200 rounded-xl border-none px-3 py-2 outline-none"
            />
            <p className="text-red-300">{errors.about && errors.about.message}</p>
          </div>
        </div>
      </div>
      <button type="submit" className="w-1/3 self-end bg-primaryGreen rounded-xl py-2 text-white">
        Submit
      </button>
    </form>
  );
}

export default Settings;
