import './style.css'
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsImage } from 'react-icons/bs'

function Previews(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div className='thumb' key={file.name}>
      <div className='thumbInner'>
        <img
          src={file.preview}
          className='img'
          alt={file.name}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <span><BsImage /></span>
        <p>Drag 'n' drop image here, or click to select files</p>
        <aside className='thumbs-container'>
          {thumbs}
        </aside>
      </div>
      <div className='inputs'>
        <input type='text' placeholder='Event Title' />
        <input type='text' placeholder='Full Address of Event' />
        <input type='text' placeholder='Event Title' />
        <textarea type='text' cols='10' placeholder='Description of Event' />
        <button>Post</button>
      </div>
    </section>
  );
}

export default Previews