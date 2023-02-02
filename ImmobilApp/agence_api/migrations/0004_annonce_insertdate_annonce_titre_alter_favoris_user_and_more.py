# Generated by Django 4.1.4 on 2022-12-27 22:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('agence_api', '0003_alter_annonce_annonceur'),
    ]

    operations = [
        migrations.AddField(
            model_name='annonce',
            name='insertDate',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='annonce',
            name='titre',
            field=models.CharField(default='No title', max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='favoris',
            name='user',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterUniqueTogether(
            name='favoris',
            unique_together={('annonce', 'user')},
        ),
    ]