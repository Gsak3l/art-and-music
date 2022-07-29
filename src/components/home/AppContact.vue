<template>
	<section id="contact" style="background-image: url('assets/img/main%20images/greeceHigh.svg')">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="text-uppercase section-heading">επικοινωνηστε</h2>
					<h3 class="section-subheading" style="color: white">
						Στείλτε μας email μέσω της παρακάτω φόρμας επικοινωνίας <br />
						ή κάλεστε μας στο 2310-2336652 & 6934690502
					</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<form method="POST" action="/success" id="contactForm" name="contactForm"
                novalidate="novalidate" data-netlify="true" data-netlify-recaptcha="true">
						<div class="form-row">
							<div class="col col-md-6">
								<div class="form-group">
									<input name="Όνομα" class="form-control" type="name" placeholder="Όνομα *" /><small class="form-text text-danger help-block lead"></small>
								</div>
								<div class="form-group">
									<input name="Επώνυμο" class="form-control" type="surname" placeholder="Επώνυμο *" /><small
										class="form-text text-danger help-block lead"
									></small>
								</div>
								<div class="form-group">
									<input name="Εmail" class="form-control" type="email" placeholder="Email *" /><small class="form-text text-danger help-block lead"></small>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<textarea name="Μήνυμα" class="form-control" id="message" placeholder="Μήνυμα *" required=""></textarea
									><small class="form-text text-danger help-block lead"></small>
								</div>
							</div>
							<div class="col">
								<div class="clearfix"></div>
							</div>
							<div class="col-lg-12 text-center">
								<div id="success"></div>
								<button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">αποστολη</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "AppContact",
	};
</script>

<style scoped></style>
