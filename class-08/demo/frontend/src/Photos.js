import React from 'react';

class Photos extends React.Component {
  render() {
    return (
      this.props.photos.map((photo, idx) => (
        <div key={idx}>
          <a href={photo.original_image}><img src={photo.img_url} alt='a generic string...'/></a>
        </div>
      ))
    )
  }
}

export default Photos;
