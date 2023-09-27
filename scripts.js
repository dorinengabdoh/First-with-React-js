const rootContainer = document.getElementById('root-element')
const root = ReactDOM.createRoot(rootContainer)
// const food1 = document.getElementById('food1')
// const root1 = ReactDOM.createRoot(food1)
// import images from './data.js';

const images =
  {
    ndole: 'https://www.chefspencil.com/wp-content/uploads/Ndole-1-960x1199.jpg.webp',
    fufu: 'https://www.chefspencil.com/wp-content/uploads/Fufu-and-Eru.jpg.webp',
    okok:'https://www.chefspencil.com/wp-content/uploads/Okok-1.jpg.webp',
    sanga:'https://www.chefspencil.com/wp-content/uploads/Sanga-1.jpg.webp',
    jama: 'https://www.chefspencil.com/wp-content/uploads/Njama-Njama-1.jpg.webp',
    soup: 'https://www.chefspencil.com/wp-content/uploads/Groundnut-Soup.jpg.webp',
    taro : 'https://www.chefspencil.com/wp-content/uploads/Yellow-Soup-and-Achu.jpg.webp',
    mbongo : 'https://www.chefspencil.com/wp-content/uploads/Mbongo-1.jpg.webp',
    okro : 'https://www.chefspencil.com/wp-content/uploads/Okro-Soup-1.jpg.webp',
    koki: 'https://www.chefspencil.com/wp-content/uploads/Koki-1.jpg.webp',
    pistache: 'https://www.chefspencil.com/wp-content/uploads/Egusi-Puddingjpg.jpg.webp',
    domba: 'https://www.chefspencil.com/wp-content/uploads/Ndomba-1.jpg.webp',
    kondre: 'https://www.chefspencil.com/wp-content/uploads/Kondre.jpg.webp',
    dj: 'https://www.chefspencil.com/wp-content/uploads/Poulet-DG-1.jpg.webp',
    pile: 'https://www.chefspencil.com/wp-content/uploads/Pomme-pile.jpg.webp',
    poisson: 'https://www.chefspencil.com/wp-content/uploads/Poisson-Braise-1.jpg.webp',
    beignet: 'https://www.chefspencil.com/wp-content/uploads/Beignet-Haricot.jpg.webp',
    soya: 'https://www.chefspencil.com/wp-content/uploads/Cameroonian-Soya-1.jpg.webp',
    croquette: 'https://www.chefspencil.com/wp-content/uploads/Chin-Chin.jpg.webp',
    caramet: 'https://www.chefspencil.com/wp-content/uploads/Groundnut-Sweets.jpg.webp', 
  }
const App1 = () => {
  return (
    <div className='title'>
      <h1> 20 Most Popular Foods in Cameroon</h1>
      <div className='food2'>
        <img src={images.ndole} alt='React Image' className="img"/>
        <div className='text'>
          <h2>1.Ndole</h2>
          <h4>Ndolé is the most popular dish in Cameroon. You’ll find it at nearly all ceremonies and banquets. When asking tourists what they most loved about their stay in Cameroon, they’ll always name this dish.Ndolé is a traditional dish of the Duala people of one of the coastal regions of Cameroon. It is a peanut-based stew made with Ndolé leaves (also called bitter leaves), crayfish, beef, and spices. The whole thing is served with miondo (a starchy mixture of ground cassava tied up in banana leaves) or plantain.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.fufu} alt='React Image' className="img" />
        <div className='text'>
          <h2>2. Fufu and Eru</h2>
          <h4>After Ndolé, this is one of the most loved dishes of Cameroon. In nearly all markets, you’ll find a Mami Eru; that is a mami (the pidgin word for mama or mother) who sells fufu and eru. Fufu and eru is a traditional dish from the northwest and southwest regions of Cameroon and its neighboring Nigeria.The stew consists of eru (Gnetum africanum) stewed with spinach (commonly called waterleaf in Cameroon), palm oil, and either smoked fish, dried crayfish, cow skin (called canda in pidgin), or beef.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.okok} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>3. Okok</h2>
          <h4>There are three varieties of Okok dishes in Cameroon, from three different ethnic groups: the Bassa, Eton, and Yabassi. The two most prevalent are the Bassa and Eton Fun or nerdy fact: The scientific name of Okok is Gnetum africanum – yes, just like Eru (above). The reason why is that it is the same leaf but with different appellations. In the southwest and northwest regions of Cameroon, it is commonly known as eru, but Okok in other southern regions (mainly littoral, center, and south regions).Getting back to the dishes…The last two Okok meals are peanut and palm nut juice-based stews, the only difference being the seasoning.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.sanga} alt='React Image' className="img" />
        <div className='text'>
          <h2>4. Sanga</h2>
          <h4>Sanga is a one-pot vegetable dish from the southern and central regions of Cameroon. The main ingredients are black nightshade leaves, commonly called Zoom, palm nut juice, fresh corn grains, and sugar (optional). Many people prefer adding sugar to this meal, but the fresh vegetables and corn give it a sweet aspect by themselves.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.jama} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>5. Njamah Njamah</h2>
          <h4>Njamah Njamah, also known as huckleberry or scientifically as Solanum Scabrum, is one of the most popular vegetables in Cameroon. It is commonly served with corn fufu (pounded fine-ground corn) but also with unripe-boiled bananas or plantains.It is a staple meal but can be very expensive to cook during the dry season, as at this time vegetables are in short supply.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.soup} alt='React Image' className="img" />
        <div className='text'>
          <h2>6. Groundnut Soup</h2>
          <h4>Groundnut soup, sauce d’arachide in French, is a peanut soup made by blending roasted peanuts (groundnuts) in a food processor People of the south and central regions of Cameroon traditionally cook this soup with minimal ingredients: peanut paste, either bifaga also called mbounga (a type of smoked fish), or chicken, ginger, garlic, onions, and pepper (optional)</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.taro} alt='React Image' className="img" />
        <div className='text'>
          <h2>7. Yellow Soup and Achu</h2>
          <h4>This beautiful yellow soup is one of the most delicate in Cameroon. It is traditionally made by fusing red oil, beef or chicken, limestone (yes, the rock!), and a variety of spices. It is paired with achu (pounded cocoyam) and sometimes a small portion of huckleberry.No forks or spoons! Like many other African dishes, yellow soup and achu taste way better when eaten with the fingers.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.mbongo} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>8. Mbongo</h2>
          <h4>The appearance of this soup can make people more reluctant than willing, but it is a highly flavored and tasty soup.Mbongo, called mbongo tchobi when cooked with fish, is a spicy black sauce mainly eaten by the Bassa people. The crucial ingredient is mbongo spice, from which the stew got its name. Together with other dry spices, they are burnt and then ground before cooking the sauce – the reason for its black color. It is served with boiled plantain or cocoyam.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.okro} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>9. Okro Soup</h2>
          <h4>Of ten people visiting patients in the hospital, at least seven will have this soup in their basket. Some say it is because of its sticky nature – so the patient can easily consume it – but rather it’s because it is so healthy.Called sauce gombo in French, this vibrant soup consists of okra, tomatoes, onions, garlic, a small quantity of oil, pepper (optional), and either crayfish, smoked fish, or meat. Some people like to add ground egusi (melon seeds) to the soup, but that is totally up to the cook. It is served with fufu and traditionally eaten with fingers.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.koki} alt='React Image' className="img" />
        <div className='text'>
          <h2>10. Koki</h2>
          <h4>This spongy and tasty pudding-like steamed meal is made with coarsely ground black-eyed peas. Its yellow color comes from the red oil added, which creates a moist Koki.The melange is traditionally cooked in plantain or banana leaves but can also be cooked in muffin cups or other alternatives.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.pistache} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>11. Egusi Pudding</h2>
          <h4>Known as met de pistaches in French, egusi pudding is mostly cooked for New Year’s and wedding ceremonies. Many ethnic groups, the Bantus principally, believe that it can predict how successful the year or the marriage will be – all depending on the leaves, taste, and texture of the pudding after being cooked</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.domba} alt='React Image'  className="img" />
        <div className='text'>
          <h2>12. Ndomba</h2>
          <h4>Ndomba is a spicy papillote made with fish, chicken, or pork as the main ingredient. The spices used vary depending on which Ndomba you cook.Fish Ndomba, for example, takes pèbè (false nutmeg), country onions, white pepper, mesep (wild basilica), garlic, onions, black pepper, akpi grain (wild plant also known as “African nutmeg”), and pepper (optional but a key ingredient).</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.kondre} alt='React Image'  className="img" />
        <div className='text'>
          <h2>13. Kondré</h2>
          <h4>Kondré is a highly spiced one-pot dish that originates from the western part of Cameroon. It consists of plantain, meat (usually pork), tomatoes, onions, dry spices, and some oil. It is all placed in a pot and cooked for about two hours to allow the meat and plantain to soften and absorb the spices. The plantains and vegetables add a soft and tender element to the dish, while the meat and fish provide a satisfying chewiness.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.dj} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>14. Poulet DG</h2>
          <h4>This melange of seasoned chicken and fried ripe plantain together with a flavorful tomato sauce creates a colorful gombo that tastes absolutely delicious. It is one of the best dishes to start with if you are new to Cameroonian cuisine, being easy to make and easy to find the ingredients in all markets.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.pile} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>15. Mashed Potatoes and Beans</h2>
          <h4>Cameroonians love spicy food. Anything with pepper sauce on the side is always appealing, especially where the food tastes best when eaten with fingers. That’s the case with Cameroonian street foods, consumed by all, but primarily by single men, during outings, or by people not fans of cooking</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.poisson} alt='React Image'  className="img" />
        <div className='text'>
          <h2>16. Poisson Braisé (Roast Fish)</h2>
          <h4>It isn’t easy to find someone who doesn’t like Cameroonian roast fish. It originated among the Duala people in the littoral region (coastal region), but today is eaten countrywide.It is served with fried ripe plantain, as in the picture above, or with bobolo, which is fermented ground cassava in leaves.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.beignet} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>17. Puff Puff and Beans</h2>
          <h4>Puff puff and beans, Beignet Haricot in French, is the most famous street food in Cameroon. It is very affordable and usually eaten with pap, a corn porridge Puff puffs are fluffy doughnuts, usually fried until they obtain a beautiful golden color. The beans, on the other hand, are fried with some highly flavored spices. The combination of the two gives your palate a very delicious taste.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.soya} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>18. Soya (Skewered Meat)</h2>
          <h4>You cannot walk down a main street in Cameroon’s cities without coming across a stand of soya. They are mainly made by hausa men, who hold the secret of the powdery pepper and spices that accompany this delicacy. Soya is a spicy grilled meat, previously marinated and threaded on skewers.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.croquette} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>19. Chin Chin (Croquettes)</h2>
          <h4>Chin-chin, or croquettes, is a very famous pastry in West Africa. They are made with flour, sugar, eggs, butter, and flavoring. Once mixed, the mixture is shaped – the most common shapes being small balls or cubes. They are very common at parties, as they are easy to nibble on.</h4>
        </div>
      </div>
      <div className='food2'>
        <img src={images.caramet} alt='React Image'  className="img"/>
        <div className='text'>
          <h2>20. Groundnut Sweets (Caramel)</h2>
          <h4>They are straightforward to make (requiring only three ingredients) and are the perfect snack while watching a movie, working, or chatting with friends. This sweet must, however, be eaten in moderation, for the sake of your teeth</h4>
        </div>
      </div>

    </div>
  )
}
root.render(<App1 />)
