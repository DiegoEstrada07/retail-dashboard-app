let selectedRating = 0;
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
      star.addEventListener('click', () => {
        selectedRating = star.dataset.value;
        updateStars(selectedRating);
      });
    });

    function updateStars(rating) {
      stars.forEach(star => {
        star.classList.toggle('active', star.dataset.value <= rating);
      });
    }

    async function sendReview() {
      const comment = document.getElementById('comment').value;

      if (selectedRating === 0) {
        alert('Please select a rating');
        return;
      }

      const response = await fetch('http://localhost:3000/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rating: selectedRating,
          comment: comment
        })
      });

      const result = await response.json();
      document.getElementById('message').innerText = result.message;
    }

    