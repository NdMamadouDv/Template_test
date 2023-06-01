export const getOwnerInfo = ` *[_type == "ownerInfo"] | order(_createdAt asc) []{
    ...,
    socials[]->
  }`;


  export const getSocials = `*[_type == "social"][]{
    ...,
  
  }`;
  